<template>
    <div>
        <b-card class="addbottommargin body ">
            <b-card-body class="p-0 text-center">
                <div class="text-right text-green ">
                    {{percentage}} <sup>{{variation}}</sup>
                </div>
                <div class="text-header">
                    <strong>
                        {{cardnumber}}
                    </strong>
                </div>
                <div>
                    <p class="text-center">
                        {{cardtext}}
                    </p>
                </div>
            </b-card-body>
        </b-card>
    </div>
</template>
<style lang="scss" scoped>
    .card {
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        border: 1px solid rgba(0, 40, 100, 0.12);
        width: 100%;

    }

    .text-header {
        text-align: center;

        strong {
            font-size: 3rem;
        }
    }
    .text-green{
        color: green;
    }
</style>
<script>
    export default {
        name: 'NumberCard',
        data: () => ({}),
        props: ['percentage', 'variation', 'cardnumber', 'cardtext']
    };
</script>
