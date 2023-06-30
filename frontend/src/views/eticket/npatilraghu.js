< !DOCTYPE html >

<title>Rediect to e-Ticket app (e-Ticket) </title>

<head>

    <script type="javascript" >
        const function setVerified(){
        const pay_capture = "true";
         localStorage.setItem("ticket_payment_status",pay_capture) ;
        console.log(localStorage.getItem("ticket_payment_status"));
        alert("sucess...")
        }
        
        </script>
</head>

<body>
    <h1>

        <input type="button" onClick="setVerified();" value="Please click on clink to redirect to e-Ticket app"></a>
    </h1>
</body>

</html >