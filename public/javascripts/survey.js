var SurveyController = function() {
        function reset(){
            $('.others > label').empty();
            $('.addSelector').empty();
            document.getElementById('selectbar').value = "default";
            $('.addQuest').empty();
        }

        var Constructor = function () {
            $('#reset').click(function(event) {
                /* Act on the event */
                $('.selectbar').fadeIn();
                reset();
            });

            $("#selectbar").change(function(event) {
                /* Act on the event */
                $(".selectbar").fadeOut();
                var selected = document.getElementById("selectbar").value;
                if(selected == "multiple-many" || selected == "multiple-one") {

                    var butt = document.createElement('BUTTON');
                    butt.setAttribute('id', 'addButton');
                    butt.setAttribute('type', 'button');
                    butt.innerHTML = "선택지추가 (" + selected + ")";
                    $(".addSelector").append(butt);

                    var x = document.createElement("INPUT");
                    x.setAttribute("type", "checkbox");
                    $(".others > label").append(x).append("기타");
                }
                else {
                    // reset();
                }

                $('#addButton').click(function(event) {
                    /* Act on the event */
                    var inp = document.createElement("INPUT");
                    inp.setAttribute('type', 'text');
                    inp.setAttribute('size', '100');
                    $('.addQuest').append(inp);
                });

            });


            $("#plus-quest").click(function(event) {
                /* Act on the event */
                alert("test!");
            });

        };

        return Constructor;
} ();
