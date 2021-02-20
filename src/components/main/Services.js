import React from "react";
import tutoring from "../../img/one-on-one-tutoring-min.jpg";
import business from "../../img/business-english-classes-min.jpg";
import onlineClasses from "../../img/online-classes-min.jpg";
import classes from "../../img/after-school-classes-min.jpg";
import "../../App.css";

function Services() {
  return (
    <section className="section-services">
        {/* <h2 className="heading-secondary u-margin-bottom-4">
            Services
        </h2> */}
        <div className="services-content">
            <div className="service-box">
                <img className="service-box__image" src={tutoring} alt="Tutoring"/>
                <h3 className="heading-tertiary">
                    1-on-1 Tutoring
                </h3>
                <p className="service-box__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a sapien fermentum, condimentum sapien id, lobortis felis. Maecenas facilisis pellentesque auctor.
                </p>
            </div>
            <div className="service-box">
                <img className="service-box__image" src={classes} alt="Tutoring"/>
                <h3 className="heading-tertiary">
                    After School Classes
                </h3>
                <p className="service-box__text">
                    Suspendisse eget tempor felis. Aenean eu diam ut enim interdum mollis. Suspendisse aliquam, tellus id semper imperdiet, augue urna tempus quam, eu feugiat ex lacus vitae nisl.
                </p>
            </div>
            <div className="service-box">
                <img className="service-box__image" src={business} alt="Tutoring"/>
                <h3 className="heading-tertiary">
                    Business English Classes
                </h3>
                <p className="service-box__text">
                    Fusce imperdiet augue sit amet libero malesuada, nec rutrum felis ultricies. Quisque ac felis turpis. Suspendisse vel blandit ipsum, sit amet efficitur ipsum. Donec sem quam, tincidunt ac massa varius, lacinia porta tellus.
                </p>
            </div>
            <div className="service-box">
                <img className="service-box__image" src={onlineClasses} alt="Tutoring"/>
                <h3 className="heading-tertiary">
                    Online Tutoring
                </h3>
                <p className="service-box__text">
                    Aliquam bibendum quam nec enim suscipit, nec porttitor lorem sagittis. Integer at magna iaculis, sollicitudin augue quis, mattis risus. Phasellus egestas arcu et quam laoreet semper.
                </p>
            </div>
        </div>
    </section>
  );
}

export default Services;