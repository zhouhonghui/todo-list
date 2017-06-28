const todokey='todo-list'
export default {
    fetch: function() {
        return JSON.parse(window.localStorage.getItem(todokey) || '[]');
    },
    save: function(items) {
        window.localStorage.setItem(todokey, JSON.stringify(items));
    }
}