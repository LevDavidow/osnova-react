import React, {PropTypes} from 'react';
import handleContactForm from '../../functions/handleContactForm';

class FooterSocialShare extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const Share2 = window.Ya.share2;
    const ajax = this.props.ajax;
    Share2(this.refs.share2, {
      theme: {
        bare: true,
        services: 'gplus,linkedin,facebook'
      },
      content: {
        title: ajax.title,
        description: ajax.description,
        url: ajax.siteUrl,
        image: ajax.logoUrl
      }
    });
  }
  render() {
    return (
      <div className="footer-contacts__social footer-social">
        <h2 className="footer-social__headling">
        {this.props.locales["tellAboutUs"]}
        </h2>
        <div ref='share2' className="ya-share2"></div>
      </div>
    )
  }
}

export default FooterSocialShare;
