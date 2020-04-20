$(document).ready(function(){

    // Click event on "Add Burger" button
        $(".add-burger-btn").on("click", function(event){
            event.preventDefault();
    
            if(/\S/.test($("#enter-burger").val().trim())){
                
                let newBurger = {
                    burger_name : $("#enter-burger").val().trim(),
                    devoured: 0
                } 
        
                $.ajax("/api/burgers" , {
                    type: "POST",
                    data: newBurger
                }).then(function(res){
                    console.log(res);
                    console.log("Burger added");
                    location.reload();
                })
            }
        });
    
    
    // Click event on "Devour" button
        $(".devour").on("click", function(event){
            
            console.log("Triggered")
            let updatedBurger = {
                devoured: 1
            }
            let id = $(this).data("id");
    
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: updatedBurger
            }).then(function(res){
                console.log(res);
                console.log("Burger devoured!");
                location.reload();
            })
        });
    
    // Click event on "Trash Burger" button
        $(".trash-burger").on("click", function(event){
            let id = $(this).data("id");
            $.ajax({
                url: "/api/burgers/" + id,
                method: "DELETE"
              }).then(function(res){
                console.log(res);
                console.log("Burger trashed.");
                location.reload();
            })
        })
    });