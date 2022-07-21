import React, { Component, useState  } from 'react';
import {FormControl, Dropdown, Navbar, Nav, Container, DropdownButton} from "react-bootstrap";

export let musicUpdated = 'Mario Bros. - Super Mario Bros. Theme.mid';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <DropdownButton
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
        title={"Musiques"}
        id="dropdown-basic-button"
        variant={"dark"}>
        {children}
        &#x25bc;
    </DropdownButton>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <FormControl
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
);


class MusicList extends Component {
    handleCLick = (ChosenMusic) => {
        // Updating the current music
        document.getElementById('test').src=ChosenMusic;
        // Variable we gonna pass to MusicApi
        musicUpdated = ChosenMusic
        // We successfully update the music we gonna pass to the API and the music that will be played
    }
    render() {
        return (
      <Navbar variant="dark" bg="dark" expand="lg">
          <Container fluid>
                <Navbar.Brand href="#home">MUSIQUE A TROUS</Navbar.Brand>
                <Navbar.Toggle  aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                    <Nav>
                        <Dropdown >
                            <Dropdown.Toggle as={CustomToggle} />
                            <Dropdown.Menu as={CustomMenu}  variant="dark">
                                <Dropdown.Item onClick={() => this.handleCLick('Mario Bros. - Super Mario Bros. Theme.mid')}>Mario</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.handleCLick('mozart-symphony41-3-piano.mid')}>Mozart</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.handleCLick('nameMusique3')}>test2</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.handleCLick('nameMusique4')}>Musique4</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    );
  }
}

export default MusicList;
