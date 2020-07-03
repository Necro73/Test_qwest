var x = Vue.component('card_assembl', 
{
    props: 
    {
        id:
        {
            type: Number,
        },
        imageq:
        {
            type: String,
        },
        name:
        {
            type: String,
        },
        text:
        {
            type: String,
        }
    },
    data: function()
    {
        return{
            imgs: this.imageq,
        }
    },
    template:
    `
    <div class="card">
        <img :src="imgs" />
        <br><br>
        <b>{{name}}</b>
        <br><br>
        <p>{{text}}</p>
        <table border="0" cellspacing="10pt">
            <tr>
                <td>
                    <p class="smallq">необходимо собрать</p>
                </td>
                <td>
                    <p class="smallq">конец</p>
                </td>
            </tr>
            <tr>
                <td>
                    <b>
                        <h style="color:#00BB00">45194</h>
                        <h>из 1 000 000 RUB</h>
                    </b>
                </td>
                <td>
                    <b>завтра</b>
                </td>
            </tr>
        </table>
        <button disabled class="tagq">помочь нуждающимся</button>
        <button disabled class="tagq">закят</button>
        <br><br>
        <div style="width:40px; height:40px; margin:auto;">
            <button class="button_circle">+</button>
        </div>
        <br>
    </div>
    `
})

new Vue({
    el: "#app",
    components: {x},
    data:{},
    methods: {}
});