<template>
    <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div class="left-content-components lg:col-span-2 lg:py-12">
                    <h2 class="text-[24px] text-my-header font-semibold mb-2">Contact</h2>
                    <ul>
                        <li>
                            <img src="../assets/icons/envelope_icon.png" alt="icon">
                            <p>Email:&nbsp;</p>
                            <a class="contact-link" href="mailto:fauzanalfaruqi@gmail.com">fauzanalfaruqi@gmail.com</a>
                        </li>
                        <li>
                            <img src="../assets/icons/linkedin_icon.png" alt="icon">
                            <p>LinkedIn:&nbsp;</p>
                            <a class="contact-link"
                                href="https://linkedin.com/in/fauzanalfaruqi">linkedin.com/in/fauzanalfaruqi</a>
                        </li>
                        <li>
                            <img src="../assets/icons/phone_icon.png" alt="icon">
                            <p>Phone/WhatsApp:&nbsp;</p>
                            <a class="contact-link" href="https://wa.me/62895411396153">+62895411396153</a>
                        </li>
                    </ul>
                    <div id="sm-logo-links">
                        <a href="https://t.me/fauzanalfaruqi/" target="_blank"> <img class="sm-logo-link"
                                src="../assets/icons/telegram_icon.png" alt="telegram"> </a>
                        <a href="https://github.com/fauzanalfaruqi" target="_blank"> <img class="sm-logo-link"
                                src="../assets/icons/github_icon.png" alt="github"> </a>
                        <a href="https://gitlab.com/fauzanalfaruqi" target="_blank"> <img class="sm-logo-link"
                                src="../assets/icons/gitlab_icon.png" alt="gitlab"> </a>
                        <a href="https://efei.itch.io" target="_blank"> <img class="sm-logo-link"
                                src="../assets/icons/itch_icon.png" alt="itch.io"> </a>
                        <a href="https://play.unity.com/u/fauzanalfaruqi" target="_blank"> <img class="sm-logo-link"
                                src="../assets/icons/unity_icon.png" alt="unity-play"> </a>
                        <a href="https://www.freelancer.com/u/fauzanalfaruqi" target="_blank"> <img class="sm-logo-link"
                                src="../assets/icons/freelancer_icon.png" alt="freelancer"> </a>
                        <a href="https://projects.co.id/public/browse_users/view/ebaa22/fauzanalfaruqi" target="_blank">
                            <img class="sm-logo-link" src="../assets/icons/projectsid_icon.png" alt="projects.co,id">
                        </a>
                    </div>
                </div>

                <div class="rounded-lg p-0 lg:col-span-3 lg:p-12">
                    <form @submit.prevent="handleSubmit" action="https://formspree.io/f/mjvnzavp"
                        method="POST">
                        <div>
                            <label class="sr-only" for="name">Name</label>
                            <input class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Name" type="text"
                                id="name" v-model="name" :disabled="sending" />
                        </div>

                        <div>
                            <label class="sr-only" for="message">Message</label>

                            <textarea class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Message"
                                rows="8" id="message" v-model="message" name="message" :disabled="sending"></textarea>
                        </div>

                        <div class="mt-4">
                            <button type="submit" :disabled="sending"
                                class="inline-block w-full rounded-lg px-5 py-3 font-medium text-white sm:w-auto" id="submit-button">
                                {{ sending ? 'Sending...' : 'Submit Message' }}
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </section>
</template>


<script>

export default {
    data() {
        return {
            name: '',
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
                        name: this.name,
                        message: this.message
                    })
                });

                if (res.ok) {
                    alert('Message sent successfully!');
                    this.name = '';
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

li {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
    margin-bottom: 15px;
}

li img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
}

#sm-logo-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
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

label {
    font-family: Poppins, Roboto, Heveltica;
    font-size: 16px;
    color: #5A5A5A;
}

input[type=text] {
    border: solid #3F94A7 2px;
    border-radius: 10px;
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
    font-family: Poppins, Roboto, Heveltica;
    font-size: 16px;
    color: #5A5A5A;
}

#submit-button {
    font-family: Poppins, Roboto, Helvetica;
    font-size: 16px;
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
</style>