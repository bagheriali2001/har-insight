const filterEntriesByPage = function(entries, page_id) {
    return entries.filter(function(entry) {
        return entry.pageref === page_id;
    });
}


export default {
    filterEntriesByPage: filterEntriesByPage
};