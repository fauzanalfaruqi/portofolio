<template>
    <div class="contact">
      <div class="contact-content">
        <div class="left-content">
            <div id="left-content-components">
                <h2>Contact</h2>
                <ul>
                    <li>
                        <img src="../assets/go-logo.png" alt="icon">
                        <p>Email:&nbsp;</p>
                        <a class="contact-link" href="mailto:fauzanalfaruqi@gmail.com">fauzanalfaruqi@gmail.com</a>
                    </li>
                    <li>
                        <img src="../assets/go-logo.png" alt="icon">
                        <p>LinkedIn:&nbsp;</p>
                        <a class="contact-link" href="https://linkedin.com/in/fauzanalfaruqi">linkedin.com/in/fauzanalfaruqi</a>
                    </li>
                    <li>
                        <img src="../assets/go-logo.png" alt="icon">
                        <p>Phone/WhatsApp:&nbsp;</p>
                        <a class="contact-link" href="https://wa.me/62895411396153">+62895411396153</a>
                    </li>
                </ul>
                <div id="sm-logo-links">
                    <img class="sm-logo-link" src="../assets/go-logo.png" alt="ppp">
                    <img class="sm-logo-link" src="../assets/pin-map-logo.png" alt="dddd">
                    <img class="sm-logo-link" src="../assets/profile.png" alt="dsds">
                    <img class="sm-logo-link" src="../assets/stock-pic.jpg" alt="werer">
                </div>
            </div>
        </div>
        <div class="right-content">
            <span id="right-content-components">
                <h2>Send Message</h2>
                <form action="">
                    <label for="name-input">Name:</label><br>
                    <input type="text" id="name-input" name="name-input"><br>
                    <label for="message-input">Message:</label><br>
                    <textarea id="message-input" name="message-input"></textarea><br>
                    <button id="submit-button" type="submit">Submit</button>
                </form>
            </span>
        </div>
      </div>
    </div>
</template>

<script>

</script>

<style scoped>
h2 {
    color: #5A5A5A;
    text-align: left;
}

.contact-link {
  color: #3F94A7;
}

.contact-link:hover {
  color: #2ab179;
}

.contact {
    margin: 20px 160px;
}

.contact-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.left-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.left-content li {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
    margin-left: -40px;
}

.left-content li img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
}

#left-content-components {
    align-items: left;
}

#sm-logo-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
}

.sm-logo-link {
    width: 50px;
    height:50px;
}

.sm-logo-link:hover {
    cursor: pointer;
    background-color: #2ab179;
}

.right-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

label {
    font-family: Poppins, Roboto, Heveltica;
    font-size: 16px;
    color: #5A5A5A;
}

input[type=text] {
    border: solid #3F94A7 2px;
    border-radius: 10px;
    width: 70vh;
    height: 5.5vh;
    font-family: Poppins, Roboto, Heveltica;
    font-size: 16px;
    color: #5A5A5A;
    margin-bottom: 10px;
}

/* 
input[type=text]:focus {
    border:solid #2ab179 2px;
    color: #5A5A5A;
} */

textarea {
    border: solid #3F94A7 2px;
    border-radius: 10px;
    width: 70vh;
    height: 25vh;
    font-family: Poppins, Roboto, Heveltica;
    font-size: 16px;
    color: #5A5A5A;
    resize: none;
    margin-bottom: 10px;
}

#submit-button {
    font-family: Poppins, Roboto, Helvetica;
    font-size: 16px;
    width: 71vh;
    height: 6.5vh;
    border: none;
    border-radius: 10px;
    background-color: #3F94A7;
    color: white;
}

#submit-button:hover {
    cursor: pointer;
    transform: scale(1.01);
}

/* textarea:focus {
    border: solid #2ab179 2px;
} */

@media only screen and (min-width: 1600px) {
    .contact {
        margin: 20px 270px;
    }

    input[type=text] {
        height: 5vh;
    }

    #submit-button {
        height: 5vh;
    }

    @supports (-ms-ime-align:auto) {
        .contact {
            background-color: aqua;
            display: flex;
            flex-direction: column;
            margin: 10px 240px;
        }
    }
}
</style>