const express=require('express')
const router=express.Router()

const homeController=require('../controllers/homeController')

router.get('/',homeController.home)

router.post('/add-task',homeController.addTask)

router.get('/deletTask/:taskId',homeController.deleteTask);

router.get('/updateTask/:taskId',homeController.updateTask)

router.post('/updatetask/:taskId',homeController.postUpdateTask)

module.exports=router;