import { useEffect, useState } from "react"

const WatchProduct = () => {
    const [watchs, setWatch] = useState([])
    useEffect(() => {
        fetch("watch.json")
          .then((res) => res.json())
          .then((data) => setWatch(data));
    }, [])
    return [watchs, setWatch];
}
export default WatchProduct;