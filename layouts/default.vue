<template>
    <div class="min-h-screen flex flex-col bg-slate-900">
        <header class="p-3 mx-auto w-full max-w-4xl ">
            <nav class="flex gap-3">
                <NuxtLink to="/" class="underline text-gray-400 hover:text-gray-200">Accueil</NuxtLink>
                <NuxtLink to="/guest" class="underline text-gray-400 hover:text-gray-200">Public</NuxtLink>
                <NuxtLink to="/private" class="underline text-gray-400 hover:text-gray-200">Privé</NuxtLink>
             </nav>
        </header>
        <main class="p-3 mx-auto w-full max-w-4xl">
            <slot />
        </main>
    </div>
</template>