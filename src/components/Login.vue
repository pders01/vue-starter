<template>
    <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div
                class="card bg-base-100 w-full max-w-sm flex-shrink-0 shadow-2xl"
            >
                <form @submit.prevent="handleSubmit" class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Username</span>
                        </label>
                        <input
                            v-model="username"
                            type="text"
                            placeholder="username"
                            class="input input-bordered"
                            required
                        />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input
                            v-model="password"
                            type="password"
                            placeholder="password"
                            class="input input-bordered"
                            required
                        />
                    </div>
                    <div class="form-control mt-6">
                        <button type="submit" class="btn btn-primary">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        async handleSubmit() {
            if (this.username && this.password) {
                const response = await fetch(
                    "https://gin-production-fd22.up.railway.app/",
                    {
                        mode: "cors",
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: `username=${this.username}&password=${this.password}`,
                    },
                );

                if (response.ok) {
                    this.$emit("authenticated");
                }
            }
        },
    },
};
</script>
