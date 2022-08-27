const router = require('express').Router();
const adminController = require('../controllers/admin');
const applicationController  =require('../controllers/application');
const { response } = require('../common/response');
const {uploadImageFile} = require('../common/upload_appImage')



//admin create app
router.post('/app',uploadImageFile.single('appImage'), applicationController.createApllication);

// get app already approve
router.get('/approve_app', adminController.getApproveApp);

// get none approve app 
router.get('/none_approve_app', adminController.getNoneApproveApp);

// approve app
router.put('/approve/:id', adminController.approveApp);

// deny app request 
router.delete('/deny_app/:id', adminController.denyApp);

// deleted app
router.delete('/delete_app/:id', adminController.deleteApp);

// admin edit app
router.put('/edit_app/:id',uploadImageFile.single('appImage'), adminController.editApp);

module.exports = router;