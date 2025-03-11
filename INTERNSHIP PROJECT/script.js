 output = ""

 function chatbot(input) {
    if(input.include('Hello')|| input.include('Hi')) {
        output = "Hi serge! How are you doing today?"
    } else if(input.include('How are you?')) {
        output = "I am fine, thank you. I hopr you have eaten tody?"
    } else if(input.include('What is the date of today?')) {
        output = new Date();
    } else if(input.include('When does internship end')) {
        output = "On Saturday...Hurray"
    } else 
    output = "Sorry, i dont understand you."
 }

 