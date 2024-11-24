# Gulp PHP Workflow

![Logo](https://raw.githubusercontent.com/hishamdalal/gulp-php-workflow/refs/heads/main/Logo.png?raw=true)

### About

Rapid web development with php, scss and javascript.

## SCSS examples:
```scss
@include color.fg(primary);
@include color.bg(accent);
@include space.padding($h:md, $v:xs);
@include space.inset($b:-xxs, $l:zero);  
@include breakpoint.more-than(lg) { ... }
@include breakpoint.equal-to(md) { ... }
@include breakpoint.between(sm, xl) { ... }
@include keyframe.animate(fadeIn, ease-in-out, 400ms);
@include transition.hover($property:(border, background-color)) { ... }
@include transition.multi( ((ease-in-out 200ms width), (ease-in-out 100ms 200ms height)) )
```

### Requirments

- node: v20.18.0
- npm: 10.9.0
- gulp-cli: 3.0.0
- gulp: 5.0.0

### How to use:

#### Clone repo

```cmd
git clone https://github.com/hishamdalal/gulp-php-workflow.git
```

#### Change directory

```cmd
cd gulp-php-workflow
```

#### install packages

```cmd
npm install -g gulp-cli
```

```cmd
npm install
```

#### Start development

```cmd
npm start
```

#### Build

```cmd
npm run build
```
