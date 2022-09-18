/*
本コードの花火アニメーションは、soramoyou04氏の下記リポジトリ内容をTypeScriptに落とし込んだものです。
Reference source(Fireworks animation with p5js)
https://github.com/soramoyou04/p5js-animation-shelf
*/

import type { NextPage } from "next";
import Head from "next/head";
import { css, cx } from "@emotion/css";

import dynamic from "next/dynamic";
import p5Types from "p5";

const Y_AXIS = 1;
const X_AXIS = 2;
const RISING = "rising";
const EXPLOSION = "explosion";
const END = "end";

let fireworks: Firework[] = [];
let star: [number, number, number][] = [];

// Nextjsでp5jsを利用するためのWindow周りの設定
const Sketch = dynamic(import("react-p5"), {
  loading: () => <></>,
  ssr: false,
});

class Firework {
  x: number;
  y: number;
  vx: number;
  vy: number;
  gv: number;
  fireHeight: number;
  maxHeight: number;
  r: number;
  g: number;
  b: number;
  a: number;
  w: number;
  explosionDelay: number;
  explosionLange: number;
  explosionPartAmount: number;
  explosionTimeLen: number;
  explosionStop: number;
  type: string;
  frame: number;
  next: number;
  explosions: Firework[];
  afterImages: AfterImage[];

  constructor(
    p5: p5Types,
    x: number,
    y: number,
    vx: number,
    vy: number,
    gv: number,
    w?: number
  ) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.gv = gv;

    this.type = RISING;
    this.frame = 0;
    this.next = 0;

    // 爆発用配列
    this.explosions = [];

    // 残像表示用配列
    this.afterImages = [];

    // 花火の色
    this.r = p5.random(155) + 80;
    this.g = p5.random(155) + 80;
    this.b = p5.random(155) + 80;
    this.a = 255;

    // 玉の大きさ(好みに応じてチューニング)
    // 打ち上げ時と爆発時の球の大きさが同じになるように設定
    // Fireworkクラスの初回生成時(打ち上げ時)は、球の大きさをランダムで生成
    // 爆発時は、打ち上げ時の球の大きさを引き継ぐために玉の大きさを引数として入力
    if (typeof w === "undefined") {
      // 玉の大きさ指定なしでクラス生成された場合、ランダムな値を設定
      this.w = p5.random(10, 3);
    } else {
      // 玉の大きさが指定されてクラス生成された場合、その大きさに設定
      this.w = w;
    }

    // 打ち上がる高さ
    this.maxHeight = p5.random(p5.height / 6, p5.height / 2);
    this.fireHeight = p5.height - this.maxHeight;

    // 消えてから爆発するまでの時間
    this.explosionDelay = p5.random(10, 40);
    // 爆発の大きさ
    this.explosionLange = p5.random(5, 15);
    // 爆発の玉の数
    this.explosionPartAmount = p5.random(20, 100);
    // 爆発から消えるまでの長さ
    this.explosionTimeLen = p5.random(20, 40);
    // 爆発のブレーキ
    this.explosionStop = 0.96;
  }

  get getType() {
    return this.type;
  }

  get getFrame() {
    return this.frame;
  }

  // 処理コントロール
  fire(p5: p5Types) {
    switch (this.type) {
      case RISING:
        this.rise(p5);
        break;
      case EXPLOSION:
        this.explosion(p5);
        break;
    }
  }

  // 打ち上げ
  rise(p5: p5Types) {
    if (this.y * 0.8 < this.maxHeight) {
      this.a = this.a - 6;
    }

    // 指定の高さまで上昇
    this.x += this.vx;
    this.y -=
      this.vy * ((this.fireHeight - (p5.height - this.y)) / this.fireHeight);

    // 残像を追加
    this.afterImages.push(
      new AfterImage(p5, this.r, this.g, this.b, this.x, this.y, this.w, this.a)
    );
    for (let afterImg of this.afterImages) {
      if (afterImg.getAlpha <= 0) {
        this.afterImages = this.afterImages.filter((n) => n !== afterImg);
        continue;
      }
      afterImg.riseImage(p5);
    }

    // 打ち上げ表示
    this.update(p5, this.x, this.y, this.w, this.a);

    // 全ての表示が消えたら処理の種類を変更する
    if (0 === this.afterImages.length) {
      if (0 === this.next) {
        // 消えてから爆発までを遅延させる
        this.next = this.frame + Math.round(this.explosionDelay);
      } else if (this.next === this.frame) {
        // this.explosionPartAmountの大きさの花火をthis.explosions配列に格納
        for (let i = 0; i < this.explosionPartAmount; i++) {
          // 爆発の角度
          let r = p5.random(0, 360);
          // 花火の内側
          let s = p5.random(0.1, 0.9);
          let vx = Math.cos((r * Math.PI) / 180) * s * this.explosionLange;
          let vy = Math.sin((r * Math.PI) / 180) * s * this.explosionLange;
          this.explosions.push(
            // 爆発時の玉の大きさを打ち上げ時と同じにするために、this.wを引数に追加
            new Firework(p5, this.x, this.y, vx, vy, this.explosionStop, this.w)
          );
          // 花火の輪郭
          let cr = p5.random(0, 360);
          let cs = p5.random(0.9, 1);
          let cvx = Math.cos((cr * Math.PI) / 180) * cs * this.explosionLange;
          let cvy = Math.sin((cr * Math.PI) / 180) * cs * this.explosionLange;
          this.explosions.push(
            // 爆発時の玉の大きさを打ち上げ時と同じにするために、this.wを引数に追加
            new Firework(
              p5,
              this.x,
              this.y,
              cvx,
              cvy,
              this.explosionStop,
              this.w
            )
          );
        }
        this.a = 255;
        this.type = EXPLOSION;
      }
    }
  }

  // 爆発
  explosion(p5: p5Types) {
    for (let ex of this.explosions) {
      ex.frame++;
      //爆発し終わった花火を配列から除去
      if (END === ex.getType) {
        this.explosions = this.explosions.filter((n) => n !== ex);
        continue;
      }

      // 残像を描画
      if (0 === Math.round(p5.random(0, 32))) {
        ex.afterImages.push(
          new AfterImage(p5, this.r, this.g, this.b, ex.x, ex.y, ex.w, ex.a)
        );
      }

      for (let afterImg of ex.afterImages) {
        if (afterImg.getAlpha < 0) {
          ex.afterImages = ex.afterImages.filter((n) => n !== afterImg);
          continue;
        }
        afterImg.explosionImage(p5);
      }

      // 爆発を描画
      this.update(p5, ex.x, ex.y, ex.w, ex.a);
      ex.x += ex.vx;
      ex.y += ex.vy;
      ex.vx = ex.vx * ex.gv;
      ex.vy = ex.vy * ex.gv;
      ex.vy = ex.vy + ex.gv / 30;
      if (this.explosionTimeLen < ex.frame) {
        ex.w -= 0.1;
        ex.a = ex.a - 4;
        if (ex.a < 0 && 0 === ex.afterImages.length) {
          ex.type = END;
        }
      }
    }
  }

  update(p5: p5Types, x: number, y: number, w: number, a: number) {
    this.frame++;
    if (0 < this.a) {
      let c = p5.color(this.r, this.g, this.b);
      c.setAlpha(a);
      p5.fill(c);
      p5.ellipse(x, y, w, w);
    }
  }
}

class AfterImage {
  x: number;
  y: number;
  vx: number;
  vy: number;
  vw: number;
  r: number;
  g: number;
  b: number;
  a: number;
  w: number;
  frame: number;
  constructor(
    p5: p5Types,
    r: number,
    g: number,
    b: number,
    x: number,
    y: number,
    w: number,
    a: number
  ) {
    this.frame = 0;
    this.r = r;
    this.g = g;
    this.b = b;
    this.x = x;
    this.y = y;
    this.w = w;
    this.a = a;
    this.vx = p5.random(-0.24, 0.24);
    this.vy = p5.random(0.2, 0.8);
    this.vw = p5.random(0.05);
  }

  get getAlpha() {
    return this.a;
  }

  // 打ち上げ用
  riseImage(p5: p5Types) {
    if (0 < this.a) {
      this.update(p5, this.r, this.g, this.b, this.x, this.y, this.w, this.a);
      this.r += 4;
      this.g += 4;
      this.b += 4;
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;
      if (0 < this.w) {
        this.w = this.w - this.vw;
      }
      this.a = this.a - 4;
    }
  }

  // 爆発用
  explosionImage(p5: p5Types) {
    if (0 < this.a) {
      this.update(p5, this.r, this.g, this.b, this.x, this.y, this.w, this.a);
      this.r += 2.5;
      this.g += 2.5;
      this.b += 2.5;
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;
      if (0 < this.w) {
        this.w = this.w - this.vw;
      }
      this.a = this.a - 1.5;
    }
  }

  update(
    p5: p5Types,
    r: number,
    g: number,
    b: number,
    x: number,
    y: number,
    w: number,
    a: number
  ) {
    this.frame++;
    let c = p5.color(r, g, b);
    c.setAlpha(a);
    p5.fill(c);
    p5.ellipse(x, y, w, w);
  }
}

// グラデーションを描画
function setGradient(
  p5: p5Types,
  x: number,
  y: number,
  w: number,
  h: number,
  c1: p5Types.Color,
  c2: p5Types.Color,
  axis: number
) {
  p5.noFill();

  if (axis === Y_AXIS) {
    // 上下方向のグラデーション
    for (let i = y; i <= y + h; i++) {
      let inter = p5.map(i, y, y + h, 0, 1);
      let c = p5.lerpColor(c1, c2, inter);
      p5.stroke(c);
      p5.line(x, i, x + w, i);
    }
  } else if (axis == X_AXIS) {
    // 左右方向のグラデーション
    for (let i = x; i <= x + w; i++) {
      let inter = p5.map(i, x, x + w, 0, 1);
      let c = p5.lerpColor(c1, c2, inter);
      p5.stroke(c);
      p5.line(i, y, i, y + h);
    }
  }
}

export function preStar(p5: p5Types) {
  star = [];
  for (let i = 0; i < 100; i++) {
    star.push([p5.random(p5.width), p5.random(p5.height / 2), p5.random(1, 4)]);
  }
}

export function drawStar(p5: p5Types) {
  for (let s of star) {
    let c = p5.color(p5.random(150, 255), p5.random(150, 255), 255);
    c.setAlpha(p5.random(150, 200));
    p5.fill(c);
    p5.ellipse(s[0], s[1], s[2], s[2]);
  }
}

// 花火を描きたい ここを参考にTSに落とし込み中 https://qiita.com/iNaoki04/items/5d420440cf3d89f54f82
export const SketchFireworks = () => {
  let fw: Firework;

  const preload = (p5: p5Types) => {};

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef)
      .style("z-index", "-1")
      .position(0, 0);
    p5.frameRate(60);
    p5.colorMode("rgb");
    preStar(p5);
  };

  const draw = (p5: p5Types) => {
    // 背景色を設定
    setGradient(
      p5,
      0,
      0,
      p5.width,
      p5.height,
      p5.color(0, 0, 0),
      p5.color(24, 32, 72),
      Y_AXIS
    );
    p5.noStroke();

    // 星を描画
    //drawStar(p5);

    // 打ち上げ間隔調整
    if (0 === p5.frameCount % 100) {
      let speed = p5.random(10, 30);
      fireworks.push(
        new Firework(p5, p5.random(p5.width), p5.height, 0, speed, 0.98)
      );
    }

    for (let fw of fireworks) {
      // 打ち切った花火を処理対象から除外
      if (END === fw.getType || 30000 < fw.getFrame) {
        fireworks = fireworks.filter((n) => n !== fw);
        continue;
      }
      // 打ち上げアニメーション呼び出し
      fw.fire(p5);
    }
  };

  // コンポーネントのレスポンシブ化
  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    preStar(p5);
  };

  return (
    <Sketch
      preload={preload}
      setup={setup}
      draw={draw}
      windowResized={windowResized}
    />
  );
};

export default SketchFireworks;
