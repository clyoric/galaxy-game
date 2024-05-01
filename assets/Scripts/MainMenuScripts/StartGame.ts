import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('StartGame')
export class StartGame extends Component {
    onLoad() {
        this.node.on(Node.EventType.MOUSE_ENTER, (event) => {
            console.log('mouse enter');
            // const eventTarget = event.target;
            // target.color = 'red';
        })
        this.node.on(Node.EventType.MOUSE_UP, () => {
            director.loadScene('game-level-scene-1');
        })
    }
}


