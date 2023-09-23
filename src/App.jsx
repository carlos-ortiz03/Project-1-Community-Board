import Card from './components/card';
function App() {

  return (
    <div className='App'>
      <img src='https://heroic-pixie-6d7f91.netlify.app/awning.png'/>
      <h1>Coffee Shop Favorites</h1>
      <section>
        <Card img="https://media.istockphoto.com/id/1467199060/photo/cup-of-coffee-with-smoke-and-coffee-beans-on-old-wooden-background.webp?b=1&s=170667a&w=0&k=20&c=xaf6WXzxcR9hhlfE6Re6GI1syywFQ92RdGjgbzQzc84=" name="Epoch Coffee" location="Austin" link="https://epochcoffee.com/" />
        <Card img="https://media.istockphoto.com/id/959987364/es/foto/caf%C3%A9-todas-las-personas-como-%C3%A9l-imagen-de-cerca.jpg?s=612x612&w=0&k=20&c=2wVtp7pBqeFP2t-dSmINjlsPWw9oBsWwwze73zoF9MU=" name="Starbucks" location="Worldwide" link="https://www.starbucks.com/" />
        <Card img="https://media.istockphoto.com/id/1137365972/es/foto/cerca-de-una-taza-humeante-de-caf%C3%A9-o-t%C3%A9-en-la-mesa-vintage-desayuno-temprano-en-la-ma%C3%B1ana-en.jpg?s=612x612&w=0&k=20&c=htgYUgkkAckChoIf_ukHReiF1KNz59W9O6GC6Xz9K_E=" name="Summer Moon" location="Texas" link="https://summermooncoffee.com/" />
        <Card img="https://images.unsplash.com/photo-1598908314732-07113901949e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" name="Melby's" location="DFW" link="https://www.melbytx.com/" />
        <Card img="https://images.unsplash.com/photo-1591456983933-4e9587fdd69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" name="Worldblend" location="DFW" link="https://www.world-blend.com/" />
        <Card img="https://plus.unsplash.com/premium_photo-1668063245248-90ee5a1ff77c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" name="151 Coffee" location="Texas" link="https://www.151coffee.com/" />
        <Card img="https://plus.unsplash.com/premium_photo-1668472274328-cd239ae3586f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" name="Dutch Bros" location="USA" link="https://www.dutchbros.com/" />
        <Card img="https://images.unsplash.com/photo-1578678809532-6f0cbc85c59a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" name="Quick Trip" location="USA" link="https://www.quiktrip.com/" />
        <Card img="https://images.unsplash.com/photo-1611497458787-f4710b375231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" name="Panera" location="USA" link="https://www.panerabread.com/en-us/home.html" />
        <Card img="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" name="Shipley Donuts" location="USA" link="https://shipleydonuts.com/" />
      </section>
    </div>
  )
}

export default App
