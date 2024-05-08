<template>
    <div class="timeline">
        <div class="outer">
            <div class="card">
                <div class="info">
                    <div class="card-title-container">
                        <h3 class="title">{{ institution }}</h3>
                        <h3 class="card-tag">{{ timelineTag }}</h3>
                    </div>
                    <hr>
                    <h4 class="year">{{ year }}</h4>
                    <slot></slot>
                </div>
            </div>
        </div>
</div>
</template>

<script>
export default {
    props: {
        institution: String,
        year: String,
        timelineTag: String
    }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  justify-content: center;
}
/* Outer Layer with the timeline border */
/* .outer {
  border-left: 2px solid #3F94A7;
} */

/* Card container */
.card {
    border: solid 2px #3F94A7;
    position: relative;
    margin: 0 0 20px 100px;
    padding: 10px;
    background: #ffffff;
    border-radius: 8px;
    /* max-width: 800px; */
}

/* Information about the timeline */
.info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 5px;
}

.info slot {
    font-size: 16px;
    font-weight: 400;
}

/* Title of the card */
.title {
    font-weight: 600;
  color: #5A5A5A;
  position: relative;
}

.year {
    font-weight: 400;
    font-style: italic;
    color: #5A5A5A;
    font-size: 16px;
}

.card-title-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.card-tag {
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;
    background-color: #3F94A7;
    padding: 5px 15px;
    text-align: center;
    min-width: 50px;
}

/* Timeline dot  */
.title::before {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  background: white;
  border-radius: 999px;
  left: -130px;
  border: 3px solid #3F94A7;
}
</style>