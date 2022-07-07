import { useData } from "@context/useDataContext";

export const usePages = (ObjperPage) => {
    const {data, loading} = useData();
    const ObjPerPage = ObjperPage;
    if (!loading) {
        const pages = data.slice(0, Math.ceil(data.length / ObjPerPage)).map((Item) => Item.id);
        const pagecontent = pages.map((element) => data.slice(ObjPerPage*(element-1) , ObjPerPage*element).map((data) => data));
        return [pages, pagecontent];
    } else {
        return [[], [{}]];
    }
};