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
                else if(selected == "shortText") {
                    var text = document.createElement('INPUT');
                    text.setAttribute('placeholder', '답변입력');
                    text.setAttribute('id', 'shortText');
                    $('.addQuest').append(text);
                }
                else {
                    var longText = document.createElement('TEXTAREA');
                    longText.setAttribute('placeholder', '의견입력');
                    $('.addQuest').append(longText);
                }

                $('#addButton').click(function(event) {
                    /* Act on the event */
                    var rad = document.createElement("INPUT");
                    var lab = document.createElement("LABEL");
                    var text = document.createElement("INPUT");
                    if (document.getElementById("selectbar").value == "multiple-one")
                        rad.setAttribute('type', 'radio');
                    else
                        rad.setAttribute('type', 'checkbox');
                    rad.setAttribute('name', 'chooseOne');
                    text.setAttribute('type', 'text');
                    $('.addQuest').append(lab);
                    $('.addQuest > label:last').append(rad).append(text);
                });

            });

            $("#plus-quest").click(function(event) {
                /* Act on the event */
                alert("test!");
            });

        };

        return Constructor;
} ();
