



$(document).ready(function(){
$("#submit-form").submit((e)=>{

  

    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxtBuqztRqADvWclAKA1CbVyB5BTUXegg0IxOB9TYe0hH9UkVotC85-SZMsJCj0Bto7lA/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})
$("#submit-form").validate({
    rules:{
        name:{
            required:true,

        }
    }
})

  

})