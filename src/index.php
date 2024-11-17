<?php
require_once('functions.php');

$url = full_url( $_SERVER );

// $path = parse_url($url, PHP_URL_HOST);
// echo __DIR__;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Browserify + Gulp Automation</title>
    <link rel="stylesheet" href="<?=$url?>assets/bundle.css" />
</head>

<body>
    <header id="main-header">
        <nav>
            <div class="logo">LOGO</div>
            <ul class="items">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main class="home">
        <div class="container">
            <div class="hero">
                <h1>Hello world</h1>
                <button id="button">Counter 0</button>
            </div>
            <article class="post">
                <h3 class="title">Post title</h3>
                <img class="thumb" src="<?=$url?>assets/img/peter-livesey-unsplash.jpg" alt="">
                <div class="text">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias dolores, quasi aut, non pariatur esse, impedit voluptatem praesentium beatae architecto possimus? Quae delectus quisquam perferendis eius dolorem. Molestias, inventore consequuntur?</p>
                    <a class="btn read-more" href="#">Read more</a>
                </div>
            </article>
        </div>
        <aside>
            <h3 class="title">Title</h3>
            <ul class="list">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ul>
        </aside>
    </main>
        
    <script src="<?=$url?>assets/bundle.js"></script>
</body>
</html> 