<template lang="pug">
.overlays
    .overlay(
    data-id="advanced",
    v-if="$store.getters.settings.screens.overlayAdvanced.value")

    .overlay(
    data-id="pohExterior",
    v-if="$store.getters.settings.screens.overlayPOHExterior.value")

    .overlay(
    data-id="pohInterior",
    v-if="$store.getters.settings.screens.overlayPOHInterior.value")

    .overlay(
    data-id="shells",
    v-if="$store.getters.settings.screens.overlayShells.value")

    .overlay(
    data-id="chests",
    v-if="$store.getters.settings.screens.overlayChests.value")

</template>

<script>
export default {
    name: 'ScreenOverlay',
    data() {
        return {
            keysPressed: [],
        };
    },
    mounted() {
        window.addEventListener('keydown', event => {
            if (this.keysPressed.indexOf(event.keyCode) > -1) return;

            this.keysPressed.push(event.keyCode);

            if (
                this.keysPressed.indexOf(66) > -1 &&
                this.keysPressed.indexOf(69) > -1
            ) {
                this.$store.getters.settings.screens.overlayAdvanced.value = true;
            } else {
                this.$store.getters.settings.screens.overlayAdvanced.value = false;
            }
        });

        window.addEventListener('keyup', event => {
            this.keysPressed = [];
        });
    },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';
@import '../../assets/styles/mixins';
@import '../../assets/styles/images';

.overlays {
    @extend %full-abs;
    pointer-events: none;
    z-index: 100;

    .overlay {
        @extend %full-abs;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        image-rendering: pixelated;
        user-select: none;
        pointer-events: none;
        z-index: 101;

        &[data-id='pohExterior'] {
            background-image: url($image-overworld-overlay-poh-exterior);
        }

        &[data-id='pohInterior'] {
            background-image: url($image-overworld-overlay-poh-interior);
        }

        &[data-id='shells'] {
            background-image: url($image-overworld-overlay-shells);
        }

        &[data-id='chests'] {
            background-image: url($image-overworld-overlay-chests);
            z-index: 100;
        }

        &[data-id='advanced'] {
            background-image: url($image-overworld-overlay-advanced);
            z-index: 102;
        }
    }
}
</style>
