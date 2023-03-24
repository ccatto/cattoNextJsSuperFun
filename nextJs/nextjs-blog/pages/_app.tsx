import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react';
// useEffect(()=>{
//     import("bootstrap/dist/js/bootstrap");
// },[]);

export default function App({ Component, pageProps }) {

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);

    return <Component {...pageProps} />;
}
