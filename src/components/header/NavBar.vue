<template>
    <div>
        <div class="navigation-bar">
            <v-navigation-drawer v-model="drawer" app :disable-resize-watcher="true">
                <v-list dense>
                    <v-list-item @click="">
                        <v-list-item-action>
                            <v-icon>home</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Home</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-action>
                            <v-icon>contact_mail</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Contact</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-app-bar app color="primary" dark>
                <v-app-bar-nav-icon class="d-block d-sm-none" @click.stop="drawer = !drawer">
                    <v-icon>menu</v-icon>
                </v-app-bar-nav-icon>
                <div class="logo">
                    <router-link tag="div" :to="{ name: 'Home' }">
                        <v-img src="@/assets/f1_logo.svg" />
                        <span class="font-weight-bold">Formula One 2020</span>
                    </router-link>
                </div>
                <nav class="navigation d-none d-sm-block">
                    <v-menu content-class="team-dropdown" transition="slide-y-transition" min-width="100%" dark>
                        <template v-slot:activator="{ on }">
                            <v-btn v-on="on" class="navigation__button" tile text large>Teams</v-btn>
                        </template>
                        <team-list></team-list>
                    </v-menu>
                    <v-menu content-class="team-dropdown" transition="slide-y-transition" min-width="100%" dark>
                        <template v-slot:activator="{ on }">
                            <v-btn v-on="on" class="navigation__button" tile text large>Drivers</v-btn>
                        </template>
                        <team-list></team-list>
                    </v-menu>
                </nav>
            </v-app-bar>
        </div>
    </div>
</template>

<script>
import TeamList from './TeamList';
export default {
    name: 'NavBar',
    components: { TeamList },
    data: () => ({
        drawer: false,
    }),
};
</script>

<style lang="scss">
.navigation-bar {
    .v-toolbar__content {
        padding: 0 16px;
        max-width: 1785px;
        margin: 0 auto;
    }

    .logo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        margin-right: 50px;

        &:hover {
            cursor: pointer;
            border-bottom: 5px solid #15151e;
        }
    }

    .navigation {
        height: 100%;
        margin: 0 20px;

        &__button {
            height: 100% !important;

            &:hover {
                cursor: pointer;
                border-bottom: 5px solid #15151e;
            }

            &:focus {
                background: #15151e;

                &::before {
                    opacity: 0 !important;
                }
            }

            &--active {
                border-bottom: 5px solid #15151e;

                &::before {
                    opacity: 0 !important;
                }
            }
        }
    }
}
.team-dropdown {
    top: 56px !important;
    border-radius: 0 !important;
    background-color: #15151e;

    @media screen and (min-width: 960px) {
        top: 64px !important;
    }
}
</style>
