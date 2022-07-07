import { useData } from "@context/useDataContext";

const SetPages = () => {
    const {data, loading} = useData();
    if (!loading) {
        const pages = data.slice(0, data.length / 4).map((Item) => Item.id);
        const pagecontent = pages.map((element) => data.slice(4*(element-1) , 4*element).map((data) => data));
        return [pages, pagecontent];
    } else {
        return [[], [{}]];
    }
};

export default SetPages;