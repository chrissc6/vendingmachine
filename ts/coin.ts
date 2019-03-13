class Quarter{
    private value: number = .25;
    get Value(){
        return this.value;
    }
    getImgUrl(): string{
        return "img/quarter.png";
    }
}
