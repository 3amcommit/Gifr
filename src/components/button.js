class Button {
    constructor(props) {
        const {name,cb} = props;
        this.$elem = $(`<button>${name}</button>`).on("click", cb);
        return this.$elem;
    }
}

export default Button;