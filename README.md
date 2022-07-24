<div align="center">
  
# hugo-profile 
![License](https://img.shields.io/github/license/gurusabarish/hugo-profile)

</div>

A hugo template for a portfolio website.
The home page consists of sections that take their content from the content folder.
The template generally follows the hugo content structure so you can have dedicated pages for projects, for example.

Features
- Flexible with extensible content
- Dark theme

### Demo

- [Github pages demo](https://gurusabarish.github.io/hugo-profile)

## Dependencies

- [Hugo](https://gohugo.io/)
- [Alpine.js](https://alpinejs.dev/)
- For Development:
    - [tailwindcss](https://tailwindcss.com/)

## How to use this template

- [Hugo theme format](#Hugo-theme-format)
- [Direct deployment using Github Pages and action](#Direct-deployment-using-Github-Pages-and-action)

### Hugo theme format

- Install Hugo and create a site using `hugo new site my-site -f=yaml`
- Clone this repo inside your themes folder and create config.yaml inside root folder and use [config](https://github.com/gurusabarish/hugo-profile/blob/master/website/v3.yaml) as base template.

```
cd themes
git clone https://github.com/gurusabarish/hugo-profile.git
```

- You should have the mentioned (_inside the config file_) images in static folder to use them.

### Direct deployment using Github Pages and action

- Fork this repo or create new repo using `use this template` button. Github action will generate all files and push to demo branch. Now, you have to connect your github pages to that `demo` branch. _No need to create demo branch. Github action will take care of it_
- You can customize the config file, content and everything inside website folder. Github action will automatically deploy your changes to demo branch every time you modify the repo.
- When using your own domain create a file in the static dir called `CNAME' and put your domain in it.
- If you clone the repo locally, you can veiw the local change with `hugo  --gc --minify --themesDir . serve` from within the website dir.

## Deployment
If you don't change the template, hugo is all you need to build the site.
Run `hugo`. It will generate a folder called public. You can use the files inside public folder for deployment. You should delete the public folder for each time you are using `hugo` command.

## Development
If you would like to make changes to the templates, you have to install tailwind.js first.
package.json includes a build script that automatically runs tailwind after changes to generate the css files.
Use it by running `npm run start`

### Credit

Originally based on [hugo profile](https://github.com/gurusabarish/hugo-profile) gurusabarish by but now heavily modified.

## Issues

If you have a question, please [open an issue](https://github.com/gurusabarish/hugo-profile/issues) for help and to help those who come after you. The more information you can provide, the better!

## Contributing

Contributions, issues, and feature requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

Licensed under [MIT](LICENSE)