<template lang="pug">

.screen(
@click='screenCleared = !screenCleared',
@contextmenu.prevent='$emit("showContextMenu", $event)',
v-bind:data-id='index',
v-bind:data-cleared='screenCleared',
ref="screen")

    .screen__marker-wrap
        .marker(
        @mouseenter='$emit("markerIsHovered", $event)',
        @mouseleave='$emit("markerIsHovered", null)',
        v-for='(marker, i) in $store.getters.screensMarkersList[index]',
        v-bind:key='i',
        v-bind:data-id='marker.id',
        v-bind:data-index-id='index',
        v-bind:data-accessible="!isNaN(parseInt(marker.id))? $store.getters.dungeonStates[parseInt(marker.id) - 1].accessible: false",
        v-bind:data-clearable="!isNaN(parseInt(marker.id))? $store.getters.dungeonStates[parseInt(marker.id) - 1].clearable: false",
        v-bind:data-finishable="!isNaN(parseInt(marker.id))? $store.getters.dungeonStates[parseInt(marker.id) - 1].finishable: false",
        v-bind:data-complete="!isNaN(parseInt(marker.id))? $store.getters.dungeonStates[parseInt(marker.id) - 1].complete: false",
        v-bind:class='{passage: (marker.id.length < 2), hovered: marker.hover, canBeTracked: !$store.getters.settings.screens.disableDungeonTracking.value }',
        v-bind:style="{backgroundImage: marker.id.length < 2? `none`: `url('/images/sprites/${marker.id}.png')`}")
            span.text(v-if='marker.id.length < 2') {{marker.id}}

        span.no-entrance(
        v-if='$store.getters.settings.screens.showEntrances.value && !screenData[index].hasEntrance')

</template>

<script>
import screenDataList from '~/assets/js/data/screens';
export default {
    name: 'Screen',
    props: ['data', 'index'],
    data() {
        return {
            screenCleared: false,
            screenData: screenDataList,
        };
    },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';
@import '../../assets/styles/images';
@import '../../assets/styles/mixins';

.screen {
    position: relative;
    float: left;
    overflow: hidden;
    width: calc(100% / 16);
    padding-bottom: calc(100% / 16);
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 301;

    &[data-cleared] {
        &::after {
            content: '';
            @extend %full-abs;
            background-image: url('../../static/images/sprites/cleared.png');
            background-color: $blue-1;
            background-size: contain;
            background-position: center;
            z-index: 1;
        }
    }

    &__marker-wrap {
        @extend %full-abs;
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        box-sizing: border-box;
        border: $grid-gutter-size solid $blue-1;

        .no-entrance {
            @extend %full-abs;
            z-index: 1;
            background-color: $blue-1;
            opacity: 0.7;
        }

        .marker {
            z-index: 2;
            position: relative;
            flex: 0 0 50%;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            background-color: rgba(4, 8, 24, 0.9);
            box-sizing: border-box;
            text-align: center;

            &:only-of-type {
                .text {
                    font-size: 18px;
                }
            }

            .text {
                position: absolute;
                left: 0;
                right: 0;
                bottom: auto;
                margin: 0 auto;
                top: 50%;
                transform: translateY(-50%);
                color: white;
                font-size: 14px;
                height: 14px;

                @include mediaMax(400px) {
                    font-size: 12px;
                    height: 12px;
                }
            }

            &:only-of-type {
                flex: 1;

                &.text {
                    & > * {
                        font-size: 20px;
                        height: 16px;
                    }
                }
            }

            &[data-id='1'],
            &[data-id='2'],
            &[data-id='3'],
            &[data-id='4'],
            &[data-id='5'],
            &[data-id='6'],
            &[data-id='7'],
            &[data-id='8'] {
                &.canBeTracked {
                    background-color: darken(tomato, 10%);
                }
            }

            &[data-accessible='true'] {
                &.canBeTracked {
                    background-color: darken(darkorange, 5%) !important;
                }
            }

            &[data-clearable='true'] {
                &.canBeTracked {
                    background-color: darken(gold, 5%) !important;
                }
            }

            &[data-finishable='true'] {
                &.canBeTracked {
                    background-color: darken(mediumseagreen, 5%) !important;
                }
            }

            &[data-complete='true'] {
                &.canBeTracked {
                    background-color: $blue-1 !important;
                }
            }

            &.hovered {
                background-color: white !important;

                &.canBeTracked {
                    background-color: white !important;
                }

                * {
                    color: $blue-1 !important;
                }
            }
        }
    }
}
</style>
