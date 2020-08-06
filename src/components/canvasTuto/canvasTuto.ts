import { Component, Vue } from 'vue-property-decorator'
import { VNodeDirective } from 'vue/types/umd';

@Component
export default class CanvasTuto extends Vue {




    public state: any = {
        players: {
            'player1': { x: 0, y: 0 },
            'player2': { x: 80, y: 80 }
        }
    }

    mounted() {
        const documento = document;
        documento.addEventListener("keydown", this.handleKey)
    }


    public renderScreen() {

        const img = new Image();
        img.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Foverwatch%2Fimages%2Fc%2Fcf%2FSoldier76_pixel.png%2Frevision%2Flatest%3Fcb%3D20170228043958&f=1&nofb=1';
        const canvas = document.querySelector('canvas') as HTMLCanvasElement
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

        for (const playerId in this.state.players) {
            const player = this.state.players[playerId]
            ctx.drawImage(img, player.x, player.y, 100, 100);
            console.log(player.x)

        }

    }

    public handleKey() {
        console.log('event')
    }
}