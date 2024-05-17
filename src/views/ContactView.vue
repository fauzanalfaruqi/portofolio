<template>
    <div class="contact">
      <div class="contact-content">
        <div class="left-content">
            <div id="left-content-components">
                <h2>Contact</h2>
                <ul>
                    <li>
                        <img src="../assets/icons/envelope_icon.png" alt="icon">
                        <p>Email:&nbsp;</p>
                        <a class="contact-link" href="mailto:fauzanalfaruqi@gmail.com">fauzanalfaruqi@gmail.com</a>
                    </li>
                    <li>
                        <img src="../assets/icons/linkedin_icon.png" alt="icon">
                        <p>LinkedIn:&nbsp;</p>
                        <a class="contact-link" href="https://linkedin.com/in/fauzanalfaruqi">linkedin.com/in/fauzanalfaruqi</a>
                    </li>
                    <li>
                        <img src="../assets/icons/phone_icon.png" alt="icon">
                        <p>Phone/WhatsApp:&nbsp;</p>
                        <a class="contact-link" href="https://wa.me/62895411396153">+62895411396153</a>
                    </li>
                </ul>
                <div id="sm-logo-links">
                    <a href="https://t.me/fauzanalfaruqi/" target="_blank"> <img class="sm-logo-link" src="../assets/icons/telegram_icon.png" alt="telegram"> </a>
                    <a href="https://github.com/fauzanalfaruqi" target="_blank"> <img class="sm-logo-link" src="../assets/icons/github_icon.png" alt="github"> </a>
                    <a href="https://gitlab.com/fauzanalfaruqi" target="_blank"> <img class="sm-logo-link" src="../assets/icons/gitlab_icon.png" alt="gitlab"> </a>
                    <a href="https://efei.itch.io" target="_blank"> <img class="sm-logo-link" src="../assets/icons/itch_icon.png" alt="itch.io"> </a>
                    <a href="https://play.unity.com/u/fauzanalfaruqi" target="_blank"> <img class="sm-logo-link" src="../assets/icons/unity_icon.png" alt="unity-play"> </a>
                    <a href="https://www.freelancer.com/u/fauzanalfaruqi" target="_blank"> <img class="sm-logo-link" src="../assets/icons/freelancer_icon.png" alt="freelancer"> </a>
                    <a href="https://projects.co.id/public/browse_users/view/ebaa22/fauzanalfaruqi" target="_blank"> <img class="sm-logo-link" src="../assets/icons/projectsid_icon.png" alt="projects.co,id"> </a>
                </div>
            </div>
        </div>
        <div class="right-content">
            <span id="right-content-components">
                <h2>Send Message</h2>
                <form
                    id="contact-form"
                    @submit.prevent="handleSubmit"
                    action="https://formspree.io/f/mjvnzavp"
                    method="POST">
                    <label for="email">Email: <br>
                        <input type="email" id="email" v-model="email" name="email" :disabled="sending"><br>
                    </label>
                    <label for="message">Message: <br>
                        <textarea id="message" v-model="message" name="message" :disabled="sending">
                        </textarea><br>
                    </label>
                    <button id="submit-button" type="submit" :disabled="sending">
                        {{ sending ? 'Sending...' : 'Submit Message' }}
                    </button>
                </form>
            </span>
        </div>
      </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            email: '',
            message: '',
            sending: false
        };
    },

    methods: {
        async handleSubmit() {
            this.sending = true;

            try {
                const res = await fetch('https://formspree.io/f/mjvnzavp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: this.email,
                        message: this.message
                    })
                });
    
                if (res.ok) {
                    alert('Message sent successfully!');
                    this.email = '';
                    this.message = '';
                } else {
                    const data = await res.json();
                    alert(data.error || 'There was a problem when submitting the form');
                }
            } catch (err) {
                console.error('Error submitting form: ', err);
                alert('There was a problem when submitting the form');
            } finally {
                this.sending = false;
            }
        }
    }
}

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
    width: 16px;
    height: 16px;
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
    gap: 27px;
}

.sm-logo-link {
    width: 28px;
    height:28px;
}

.sm-logo-link:hover {
    cursor: pointer;
    filter: brightness(1.25);
    transform: scale(1.1);
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

input[type=email] {
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