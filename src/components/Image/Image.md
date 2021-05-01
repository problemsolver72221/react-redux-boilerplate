### Image styleguide component

```js
<div>
    <div style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'baseline',
        width: '100%',
        height: 'auto',
    }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p>Profile:</p>
            <Image
                page={'detailsModal'}
                element={'profile'}
                alt={''}
                src={'https://randomuser.me/api/portraits/women/68.jpg'}
                onClick={() => console.log('hi')}
            />
            <p>Another:</p>
            <Image
                page={'homePage'}
                element={'headImg'}
                alt={''}
                src={'https://images.unsplash.com/photo-1545105511-839f4a45a030'}
                onClick={() => console.log('hi')}
            />
        </div>
    </div>
</div>
```