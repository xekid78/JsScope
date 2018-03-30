# JsScope
スコープの理解

## 処理
変数の有効範囲を理解するため、それぞれに変数`a`を定義して確認する。

## コード
```
(function() {
    'use strict'

    function sum(x, y) {
        var a = 5;
        console.log("変数ａは" + a + "です。");
        return x + y;;
    }

    var a = 10;
    var b = 20;
    var gokei = sum(a, b);
    console.log("変数ａは" + a + "です。");
    console.log("変数bは" + b + "です。");
    console.log("合計は" + gokei + "です。");

})();
```

## 出力結果  
```
変数ａは5です。
変数ａは10です。
変数bは20です。
合計は30です。
```
  
## 開発環境
| 開発ツール |  |
|:-|:-|
| OS | Windows10 |
| 仮想化ソフト | Oracle VM VirtualBox 5.2 |
| 構築ソフト | Vagrant 2.0.2 |
| 仮想化上OS | CentOS 6.9 |
| SSHクライアント | PuTTY 0.6.8 |
| FTPクライアント | Cyberduck 6.3.5 |
| エディタ | Atom 1.24.0 |
| 開発言語 | Java Script |
| Js環境 | Node.js 8.10.0 |
