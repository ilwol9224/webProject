var SurveyController = function() {
    var questID = 1;
        function resetAll(){
            $('.addingSelector').empty();
            document.getElementById('selectbar').value = "default";
            $('.addQuest').empty();
            $('.selectbar').fadeIn();
        }
        function createOthers(){
            var input = document.createElement("INPUT");
            input.setAttribute('id', 'plusOpinion');
            input.setAttribute('class', 'plusOpinion');
            $('.addQuest').append(input);
        }

        var Constructor = function () {
            $('#reset').click(function(event) {
                /* Act on the event */
                resetAll();
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
                    $(".addingSelector").append(butt);

                    var x = $("<input type='checkbox'>");
                    var lab = $("<label></label>");
                    x.attr('class', 'others');
                    lab.attr('class', 'others' );
                    lab.append(x).append('기타');
                    $(".addingSelector").append(lab);
                }
                else if(selected == "shortText") {
                    var text = document.createElement('INPUT');
                    text.setAttribute('placeholder', '답변입력');
                    text.setAttribute('id', 'shortText');
                    text.setAttribute('for', 'shortAnswer');
                    $('.addQuest').append(text);
                }
                else {
                    var longText = document.createElement('TEXTAREA');
                    longText.setAttribute('for', 'longAnswer')
                    longText.setAttribute('placeholder', '의견입력');
                    $('.addQuest').append(longText);
                }

                $('#addButton').click(function(event) {
                    /* Act on the event */
                    var choose = document.createElement("INPUT");
                    var lab = document.createElement("LABEL");
                    var text = document.createElement("INPUT");
                    if (document.getElementById("selectbar").value == "multiple-one"){
                        choose.setAttribute('type', 'radio');
                        text.setAttribute('class', 'selectExplain');
                        choose.setAttribute('name', 'chooseOne');
                    }
                    else if(document.getElementById('selectbar').value == 'multiple-many'){
                        choose.setAttribute('type', 'checkbox');
                        text.setAttribute('class', 'selectExplain');
                        choose.setAttribute('name', 'chooseOne');
                    }
                    text.setAttribute('type', 'text');
                    $('.addQuest').append(lab);
                    $('.addQuest > label:last').append(choose).append(text);

                    if ($('.addQuest #plusOpinion').length) {
                        $('.addQuest > #plusOpinion').remove();
                        createOthers();
                    }
                });

                $('.others').change(function(event) {
                    /* Act on the event */
                    var self = $(this);
                    if(self.is(':checked')){
                        createOthers();
                        $('.others').fadeOut();
                    }
                });
            });

            $("#plus-quest").click(function(event) {
                //제목과 질문문항 복사
                var result = document.createElement("DIV");
                var quest = $('.submain').clone().attr('class', questID);
                var answer = $('.addQuest').clone().attr('class', questID);
                result.setAttribute('class', 'result'+questID);
                $('.questResult').append(result);
                $(result).append(quest);
                $(result).append(answer);
                $(result).append('<hr>');
                questID++;
                resetAll();
            });

        };

        return Constructor;
} ();
