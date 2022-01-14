const axios =  require('axios')
const User = require('../model/user')
const {playlistSchema, Playlist} =  require('../model/playlist');
const createError = require('http-errors');

exports.remove_video_watched = async (req, res, next)=>{
    try{
        const userId=req.query.user_id
        const playlistId=req.query.playlist_id
        const videoId=req.query.video_id

        const url = process.env.BASE_URL+'/videos?id='+ videoId +'&part=contentDetails&key='+process.env.YOUTUBE_API_KEY
        const response = await axios.get(url)
        const tsec = YTDurationToSeconds(response.data.items[0].contentDetails.duration);

        User.findById(userId, async function(err, result) {
            if (!result){
                next(createError(404, 'User was not found'))
                return;
            }
            else{
                result.playlist.id(playlistId).video_watched.pull(videoId);
                result.playlist.id(playlistId).hours_watched -= tsec;
                await result.save();
            }
          });

        res.send({
            status: 200,
            message: "Video removed"
        })

    }catch(err){
        next(err)
    }
}

exports.set_video_watched = async (req, res, next)=>{
    try{
        const userId=req.query.user_id
        const playlistId=req.query.playlist_id
        const videoId=req.query.video_id

        const url = process.env.BASE_URL+'/videos?id='+ videoId +'&part=contentDetails&key='+process.env.YOUTUBE_API_KEY
        const response = await axios.get(url)
        const tsec = YTDurationToSeconds(response.data.items[0].contentDetails.duration);

        User.findById(userId, async function(err, result) {
            if (!result){
                next(createError(404, 'User was not found'))
                return;
            }
            else{
                result.playlist.id(playlistId).video_watched.push(videoId);
                result.playlist.id(playlistId).hours_watched += tsec;
                await result.save();
            }
          });

        res.send({
            status: 200,
            message: "Video added"
        })

    }catch(err){
        next(err)
    }
}

exports.get_playlist_all = async (req, res, next)=>{
    try{
        const userId = req.query.user_id
        const user = await User.findOne({_id: userId})

        if(!user){
            next(createError(404, "User not found"))
            return;
        }

        res.send(user.playlist)

    }catch(err){
        next(err)
    }
}

exports.get_playlist_by_id = async (req , res, next)=>{
    try{
        const playlistId = req.query.playlist_id;
        const url = process.env.BASE_URL + '/playlistItems?part=snippet&maxResults=50&playlistId='+playlistId+'&key='+process.env.YOUTUBE_API_KEY
        const response= await axios.get(url);

        res.send(response.data.items)

    }catch(err){
        next(err)
    }
}

exports.add_playlist = async (req, res, next)=>{
    try{
        const playlistId= req.query.playlist_id;
        const userId=req.query.user_id;

        var user = await User.findOne({_id: userId})

        if(!user){
            next(createError(404, "User not found"));
            return;
        }

        //playlist information yotubeapi_playlists
        const url2=process.env.BASE_URL+'/playlists?part=id,snippet&id='+playlistId+'&key='+process.env.YOUTUBE_API_KEY
        const response2 = await axios.get(url2);

        //playlist item information yotubeapi_playlistItems
        const url1 = process.env.BASE_URL + '/playlistItems?part=snippet&maxResults=50&playlistId='+playlistId+'&key='+process.env.YOUTUBE_API_KEY
        const response1 = await axios.get(url1);

        var totalVideos = response1.data.pageInfo.totalResults
        
        if(totalVideos==0){
            res.send({
                status:400,
                message: "Empty Playlist"
            })
            return
        }

        //total watch duration
        const items = response1.data.items;
        var tsec = 0;
        
        for(var i=0;i<items.length;i++){
            const id=items[i].snippet.resourceId.videoId
            const url3 = process.env.BASE_URL+'/videos?id='+ id +'&part=contentDetails&key='+process.env.YOUTUBE_API_KEY
            const response3 = await axios.get(url3)
            tsec += YTDurationToSeconds(response3.data.items[0].contentDetails.duration);
        }

        var channelTitle = response2.data.items[0].snippet.channelTitle
        var title = response2.data.items[0].snippet.title
        var thumbnail = response2.data.items[0].snippet.thumbnails.standard.url

        const playlist = new Playlist({
            playlist_id: playlistId,
            playlist_name: title,
            playlist_thumbnail: thumbnail,
            playlist_channel: channelTitle,
            video_total: totalVideos,
            video_watched: [],
            hours_total: tsec,
            hours_watched: 0
        })

        const tUser = await User.findOneAndUpdate({_id: userId}, {$push: {playlist: playlist}})

        res.send({
            status: 200,
            message: "Playlist added successfully"
        })


    }catch(error){
        next(error)
    }
}


function YTDurationToSeconds(duration) {
    var match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  
    match = match.slice(1).map(function(x) {
      if (x != null) {
          return x.replace(/\D/, '');
      }
    });
  
    var hours = (parseInt(match[0]) || 0);
    var minutes = (parseInt(match[1]) || 0);
    var seconds = (parseInt(match[2]) || 0);
  
    return hours * 3600 + minutes * 60 + seconds;
  }


  //thumbnail -> response2.data.snippet.thumbnails.standard.url
        //title -> response2.data.snippet.title
        //channel -> response2.data.snippet.channelTitle
        //total videos -> response1.data.pageInfo.totalResults