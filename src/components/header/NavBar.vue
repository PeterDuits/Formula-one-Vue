<template>
    <div class="navigation-bar">
        <v-navigation-drawer v-model="drawer" app>
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
            <div>
                <v-img src="@/assets/f1_logo.svg" />
                <span class="font-weight-bold">Formula One 2020</span>
            </div>
            <nav class="navigation d-none d-sm-block">
                <v-btn
                    class="navigation__button"
                    tile
                    text
                    large
                    :to="{ name: 'Home' }"
                    exact
                    active-class="navigation__button--active"
                    >Home</v-btn
                >
                <v-btn
                    class="navigation__button"
                    tile
                    text
                    large
                    :to="{ name: 'Teams' }"
                    active-class="navigation__button--active"
                    >Teams</v-btn
                >
            </nav>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: 'NavBar',

    data: () => ({
        drawer: false,
        teams: [
            {
                name: 'Red Bull',
                color: '#1E41FF',
                link: { name: 'RedBull' },
            },
        ],
    }),
};
</script>

<style lang="scss">
.navigation-bar {
    .v-toolbar__content {
        padding: 0 12px;
        max-width: 1785px;
        margin: 0 auto;
    }

    .navigation {
        height: 100%;
        margin: 0 20px;

        &__button {
            height: 100% !important;

            &:hover {
                background: #15151e;
            }

            &--active {
                background-color: #15151e;

                &::before {
                    opacity: 0 !important;
                }
            }
        }
    }
}
</style>
