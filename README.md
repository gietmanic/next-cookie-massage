
# Next Cookie Massage

A Simple Cookie Notifikation Solution for Google Analytics and Goolge Tag. 

## Features

- Easy Cookie Notifikation
- Google Analytics
- Google Tag

## Installation

Install  with npm

```bash
  npm install my-project
  cd my-project
```
    
## Usage/Examples
In the Main Layout File
Replace GTag with your GTag ID and GAnalytics with your Analytics Id

```javascript
import Component from 'my-project'

function App() {
  return (
      <html lang="en">
            <body>
                <CookieManager
                  GTag="YOUR GTAG ID"
                  GAnalytics="YOUR G Analytics ID"
                />
                {children}
               <Cookiemassage
                  datenschutzlink={"LINK ZUM DATENSCHUTZ"}
                />
            </body>
        </html>

  )
}
```

## Roadmap

- Dark Mode

- More Config Options

- Additional Cookies


## License

[MIT](https://choosealicense.com/licenses/mit/)

