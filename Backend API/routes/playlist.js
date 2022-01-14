const router = require('express').Router();

const playlistController = require('../controller/playlist')

router.post('/add', playlistController.add_playlist)

router.get('/get', playlistController.get_playlist_all)

router.get('/get/info', playlistController.get_playlist_by_id)

router.post('/add/video', playlistController.set_video_watched)

router.post('/remove/video', playlistController.remove_video_watched)

module.exports=router