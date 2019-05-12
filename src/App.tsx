import 'material-design-lite/material.js';
import React from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import { LayoutContent } from './components/layout/LayoutContent';
import { LayoutDrawer } from './components/layout/LayoutDrawer';
import { LayoutHeader } from './components/layout/LayoutHeader';
import { LayoutHeaderRow } from './components/layout/LayoutHeaderRow';
import { LayoutSpacer } from './components/layout/LayoutSpacer';
import { LayoutTitle } from './components/layout/LayoutTitle';
import { Nav } from './components/layout/Nav';
import { NavLink } from './components/layout/NavLink';

const App: React.FC = () => {
    return (
        <Layout className="demo-layout-transparent">
            <LayoutHeader isTransparent>
                <LayoutHeaderRow>
                    {/* <!-- Title --> */}
                    <LayoutTitle text="Title" />
                    {/* <!-- Add spacer, to align navigation to the right --> */}
                    <LayoutSpacer />
                    {/* <!-- Navigation --> */}
                    <Nav>
                        <NavLink to="#!" text="Link" />
                        <NavLink to="#!" text="Link" />
                        <NavLink to="#!" text="Link" />
                        <NavLink to="#!" text="Link" />
                    </Nav>
                </LayoutHeaderRow>
            </LayoutHeader>
            <LayoutDrawer>
                <LayoutTitle text="Title" />
                <Nav>
                    <NavLink to="#!" text="Link" />
                    <NavLink to="#!" text="Link" />
                    <NavLink to="#!" text="Link" />
                    <NavLink to="#!" text="Link" />
                </Nav>
            </LayoutDrawer>
            <LayoutContent />
        </Layout>
    );
};

export default App;
