import React, { Component, Fragment } from 'react';

import ReactBnbGallery from 'react-bnb-gallery';

import sections from './sections';

import {
  Button,
  Container,
  Header,
  Spacing,
  Text,
  Title,
  Section,
  PhotoGrid,
} from './components';

import PHOTOS from './photos';

const buttonCustomStyle = {
  display: 'inline-block',
  marginTop: '16px',
  marginBottom: '24px',
};

export default class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      openGallery: false,
      currentPhotos: null,
    };
    this.closeGallery = this.closeGallery.bind(this);
    this.onPhotoPress = this.onPhotoPress.bind(this);
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  closeGallery() {
    this.setState({
      openGallery: false,
      currentPhotos: null,
    });
  }

  onPhotoPress(url) {
    this.setState({
      openGallery: true,
      currentPhotos: [url],
    });
  }

  toggleGallery() {
    this.setState(prevState => ({
      openGallery: !prevState.galleryOpened,
    }));
  }

  render () {
    const {
      openGallery,
      currentPhotos,
    } = this.state;

    const photosToShow = currentPhotos || PHOTOS;

    return (
      <Fragment>
        <Header />
        <Container role="main">
          <Container id="start" className="container intro">
            <Title level={1}>React photo gallery</Title>
            <Text>Friendly, customizable and accessible-ready simple photo gallery based on <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>.</Text>
            <Container className="actions">
              <Spacing right={2}>
                <Button
                  onPress={this.toggleGallery}
                  customStyle={buttonCustomStyle}
                  secondary
                  large
                >
                  View photo gallery
                </Button>
              </Spacing>
              <Spacing left={2}>
                <Button
                  customStyle={buttonCustomStyle}
                  primary
                  outline
                  large
                >
                  Demos <em>(comming soon)</em>
                </Button>
              </Spacing>
            </Container>
          </Container>
          <PhotoGrid
            onPhotoPress={this.onPhotoPress}
          />
          {sections.map(section => {
            if (!section.disabled) {
              return (
                <Section key={section.id} section={section}>
                  {section.getComponent()}
                </Section>
              );
            } else {
              return null;
            }
          })}
        </Container>
        <ReactBnbGallery
          show={openGallery}
          photos={photosToShow}
          onClose={this.closeGallery}
          wrap={false}
          backgroundColor='#000000'
        />
      </Fragment>
    )
  }
}
