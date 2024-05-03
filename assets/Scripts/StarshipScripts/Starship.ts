import { _decorator, Component, Node, EventKeyboard, KeyCode, input, Input, tween, Tween, Quat, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Starship')
export class Starship extends Component {
    angle = 0;
    isTurnRight = false;
    isTurnLeft = false;

    private _startJump: boolean = false;
    private _jumpStep: number = 0;
    private _curJumpTime: number = 0;
    private _jumpTime: number = 0.3;
    private _curJumpSpeed: number = 0;
    private _curPos: Vec3 = new Vec3();
    private _deltaPos: Vec3 = new Vec3(0, 0, 0);
    private _targetPos: Vec3 = new Vec3();

    onLoad() {
        this.addEventListeners();
    }

    onDestroy () {
        this.removeEventListeners();
    }

    updateAngle() {
        if (this.angle > 360 || this.angle <= 0) {
            this.angle = 0;
        } else {
            this.angle += 1;
        }
    }



    update(deltaTime: number) {
        if (this.isTurnRight) {
            if (this.angle > 360 || this.angle < -360) {
                this.angle = 0;
            } else {
                this.angle -= 1;
            }

            console.log('here right - ', this.angle);

            let origin = Quat.rotateZ(new Quat(),new Quat(), 0);
            this.node.rotation=Quat.rotateZ(new Quat(), origin, this.angle * Math.PI/180);
        }

        if (this.isTurnLeft) {
            if (this.angle > 360 || this.angle < -360) {
                this.angle = 0;
            } else {
                this.angle += 1;
            }

            console.log('here left - ', this.angle);

            let origin = Quat.rotateZ(new Quat(),new Quat(), 0);
            this.node.rotation=Quat.rotateZ(new Quat(), origin, this.angle * Math.PI/180);
        }

    }

    onKeyDown(event: EventKeyboard) {
        switch(event.keyCode) {
            case KeyCode.ARROW_UP:
                console.log('Press up key');
                break;
        }
        switch(event.keyCode) {
            case KeyCode.ARROW_RIGHT:
                this.isTurnRight = true;
                this.isTurnLeft = false;
                break;
        }
        switch(event.keyCode) {
            case KeyCode.ARROW_DOWN:
                console.log('Press down key');
                break;
        }
        switch(event.keyCode) {
            case KeyCode.ARROW_LEFT:
                this.isTurnRight = false;
                this.isTurnLeft = true;
                break;
        }
    }

    onKeyUp(event: EventKeyboard) {
        switch(event.keyCode) {
            case KeyCode.ARROW_UP:
                console.log('Press up key');
                break;
        }
        switch(event.keyCode) {
            case KeyCode.ARROW_RIGHT:
                this.isTurnRight = false;
                this.isTurnLeft = false;
                break;
        }
        switch(event.keyCode) {
            case KeyCode.ARROW_DOWN:
                console.log('Press down key');
                break;
        }
        switch(event.keyCode) {
            case KeyCode.ARROW_LEFT:
                this.isTurnRight = false;
                this.isTurnLeft = false;
                break;
        }
    }

    addEventListeners() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    removeEventListeners() {
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
    }
}


