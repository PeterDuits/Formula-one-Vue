<template>
    <div class="container team-list">
        <div class="team-list__nav">
            <v-btn :to="{ name: 'Teams' }">Alle Teams</v-btn>
        </div>
        <div class="teams">
            <template v-for="(team, i) in teams">
                <div class="team-container col-12 col-sm-6 col-md-4 col-lg-3">
                    <router-link class="team" tag="div" :to="team.link" :key="i" :style="{ color: team.color }">
                        <div class="team-header">
                            <span class="team-header__name">{{ team.name }}</span>
                            <v-icon>keyboard_arrow_right</v-icon>
                        </div>
                        <div class="team-content">
                            <div class="team-content__stripe" :style="{ backgroundColor: team.color }"></div>
                            <img class="team-content__image" :src="team.image.url" :alt="team.image.alt" />
                        </div>
                    </router-link>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TeamList',

    data: () => ({
        teams: [
            {
                name: 'Alfa Romeo',
                color: '#9B0000',
                image: {
                    url: require('@/assets/teams/alfaromeo/car.png'),
                    alt: 'Afla Romeo Car',
                },
                link: { name: 'Home' },
            },
            {
                name: 'Haas',
                color: '#bd9e57',
                image: {
                    url: require('@/assets/teams/haas/car.png'),
                    alt: 'Haas Car',
                },
                link: { name: 'Home' },
            },
            {
                name: 'Racing Point',
                color: '#F596C8',
                image: {
                    url: require('@/assets/teams/racingpoint/car.png'),
                    alt: 'Racing Point Car',
                },
                link: { name: 'Home' },
            },
            {
                name: 'Williams',
                color: '#FFFFFF',
                image: {
                    url: require('@/assets/teams/williams/car.png'),
                    alt: 'Williams Car',
                },
                link: { name: 'Home' },
            },
            {
                name: 'Alpha Tauri',
                color: '#469BFF',
                image: {
                    url: require('@/assets/teams/alphatauri/car.png'),
                    alt: 'Alpha Tauri Car',
                },
                link: { name: 'Home' },
            },
            {
                name: 'McLaren',
                color: '#FF8700',
                image: {
                    url: require('@/assets/teams/mclaren/car.png'),
                    alt: 'McLaren Car',
                },
                link: { name: 'Home' },
            },
            {
                name: 'Red Bull',
                color: '#1E41FF',
                image: {
                    url: require('@/assets/teams/redbull/car.png'),
                    alt: 'Red Bull Car',
                },
                link: { name: 'Home' },
            },
            {
                name: 'Ferrari',
                color: '#DC0000',
                image: {
                    url: require('@/assets/teams/ferrari/car.png'),
                    alt: 'Ferrari Car',
                },
                link: { name: 'Home' },
            },
            {
                name: 'Mercedes',
                color: '#00D2BE',
                image: {
                    url: require('@/assets/teams/mercedes/car.png'),
                    alt: 'Mercedes Car',
                },
                link: { name: 'Home' },
            },
            {
                name: 'Renault',
                color: '#FFF500',
                image: {
                    url: require('@/assets/teams/renault/car.png'),
                    alt: 'Renault Car',
                },
                link: { name: 'Home' },
            },
        ],
    }),
};
</script>

<style lang="scss">
.team-list {
    width: 100vw;

    &__nav {
        display: flex;
        justify-content: space-between;
        margin: 50px 0;
    }

    .teams {
        display: flex;
        flex-wrap: wrap;
    }

    .team-container {
        width: 25%;
        padding: 0 40px 40px 0;

        .team {
            padding: 0 10px 10px 0;
            border-radius: 0 0 10px 0;
            border-bottom: 2px solid #666666;
            border-right: 2px solid #666666;
            transition: all 0.3s ease-in-out;

            &:hover {
                cursor: pointer;
                border-color: currentColor;

                .team-content__stripe {
                    width: 100px;
                    transition: all 0.3s ease-in-out;
                }
            }

            .team-header {
                display: flex;
                justify-content: space-between;
                color: #ffffff;
            }

            .team-content {
                display: flex;

                &__stripe {
                    height: 20px;
                    width: 40px;
                    margin: 20px -20px 0 0;
                    align-self: center;
                    transition: all 0.3s ease-in-out;
                }
                &__image {
                    width: 70%;
                }
            }
        }
    }
}
</style>
