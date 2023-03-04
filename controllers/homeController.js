const Task=require('../models/tasks')


exports.home=function(req,res){
    Task.find().then(task=>{
        console.log(task)
        return res.render('home',{
            task:task,
        })
    })
}

exports.addTask=function(req,res){
    const title=req.body.title;
    const about=req.body.about;
    const task=new Task({
        title:title,
        about:about
    })
    task.save()
    res.redirect('/')
}

exports.deleteTask=function(req,res){
    const taskId=req.params.taskId;
    console.log(taskId)
    Task.findById(taskId).deleteOne().then(result=>{
        console.log("task is delete");
        res.redirect('/')
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.updateTask=function(req,res){
    const taskId=req.params.taskId;
    Task.find().then(task=>{
        Task.findById(taskId).then(updatatask=>{
            return res.render('updateform',{
                task:task,
                updatetask:updatatask,
                taskId:taskId
            })
        })
    })
}

exports.postUpdateTask=function(req,res){
    const updatetitle=req.body.updatetitle;
    const updateabout=req.body.updateabout;
    const taskId=req.params.taskId;
    Task.findById(taskId).then(task=>{
        task.title=updatetitle,
        task.about=updateabout
        return task.save();
    }).then(result=>{
        console.log("task update");
        return res.redirect('/');
    })
}