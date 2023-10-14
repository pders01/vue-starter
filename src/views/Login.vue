<template>
    <div class="hero absolute left-0 top-0 z-50 min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div
                class="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl"
            >
                <form
                    @submit.prevent="handleLogin"
                    target="_self"
                    class="card-body"
                >
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
        async handleLogin() {
            if (this.username && this.password) {
                const response = await fetch(
                    "https://gin-production-fd22.up.railway.app/login",
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
                    const result = await response.json();
                    const { token } = result;

                    sessionStorage.setItem("jwt_token", token);

                    this.$router.push("/");
                }
            }
        },
    },
};
</script>
