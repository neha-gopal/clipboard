<!DOCTYPE html>
<html>
<head>
    <title>Clipboard</title>
    <meta charset="utf-8">
    <style>
        body {
            width: 548px;
            min-height: 680px;
            margin: 0;
            font-family: 'Courier New', Courier, monospace;
            background: #d8dbe2;
        }
        .container1 {
            position: absolute;
            width: 548px;
            min-height: 598px;
            left: 0;
            top: 82px;
            background: #424B54;
            border-radius: 41px 41px 0 0;
        }
        .img1 {
            position: absolute;
            width: 210px;
            height: 135px;
            right: 18px;
            top: 10px;
            border-radius: 19px;
            transform: rotate(6deg);
            object-fit: cover;
        }
        .title {
            position: absolute;
            width: 260px;
            left: 32px;
            top: 18px;
            font-weight: 540;
            font-size: 42px;
            color: #001242;
        }
        .controls {
            position: absolute;
            top: 118px;
            left: 32px;
            width: 484px;
            z-index: 2;
        }
        .search-bar {
            width: 100%;
            padding: 12px;
            border-radius: 12px;
            border: none;
            font-size: 16px;
            box-sizing: border-box;
            margin-bottom: 12px;
        }
        .clear-btn {
            padding: 10px 14px;
            border: none;
            border-radius: 10px;
            background: #001242;
            color: white;
            cursor: pointer;
            font-size: 14px;
        }
        .clipboard-items {
            position: absolute;
            width: 484px;
            left: 32px;
            top: 184px;
            color: #001242;
            font-size: 20px;
            z-index: 2;
            list-style: none;
            padding: 0;
            margin: 0 0 24px 0;
        }
        .clip-card {
            background: #ffffff;
            color: #001242;
            border-radius: 16px;
            padding: 14px;
            margin-bottom: 12px;
            word-break: break-word;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }
        .clip-text {
            font-size: 16px;
            margin-bottom: 10px;
        }
        .clip-time {
            font-size: 12px;
            margin-bottom: 10px;
            color: #424B54;
        }
        .clip-actions button {
            margin-right: 8px;
            padding: 8px 12px;
            border-radius: 8px;
            border: none;
            cursor: pointer;
        }
        .empty-state {
            color: white;
            font-size: 18px;
            padding-top: 12px;
        }
    </style>
</head>
<body>
    <div class="container1"></div>
    <div class="title">Clipboard</div>
    <img class="img1" src="https://cdn.discordapp.com/attachments/754839784509145178/955243716984053821/Untitled_Artwork.png" alt="Flowers">

    <div class="controls">
        <input id="searchInput" class="search-bar" type="text" placeholder="Search saved clips">
        <button id="clearAllButton" class="clear-btn">Clear All</button>
    </div>

    <ul class="clipboard-items"></ul>

    <script src="popout.js"></script>
</body>
</html>
