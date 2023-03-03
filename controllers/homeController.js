const Task=require('../models/tasks')


exports.home=function(req,res){
    Task.find().then(task=>{
        let num=1;
        console.log(task)
        return res.render('home',{
            task:task,
            num:num
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