const WhoAmI = () => {

    return (
        <article className="whoAmIArticle">

            <section className="who-am-i-section" >


                <img src="./img/portada.jpg" alt="me" className="img-home center" />

                <div className="div-section-text-home left">
                    <span className="span-h1 text-color-primary">I'm Pedro Crespillo</span>
                    <p className="p-home-description text-color-secondary">I am specialized in frontend development but I can do everything you need</p>
                </div>
                {/*<div className="div-section-image right">
                    <img className="image-home" src="https://i.blogs.es/ceda9c/dalle/450_1000.jpg" />
    </div>*/}
            </section>
            <a className="btn center item-block background-color-primary" href="aboutMe" >about me</a>
            <div className="">

            </div>
        </article >
    )
}

export default WhoAmI;